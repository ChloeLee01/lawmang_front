import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { logout } from "../slices/authSlice";
import { BASE_URL } from "./apis";

// 토큰 관련 유틸리티 함수
const getToken = () => {
  const token = document.cookie.match(/access_token=(.*?)(;|$)/)?.[1];
  if (!token) {
    console.error('토큰이 없습니다. 로그인이 필요합니다.');
    return null;
  }
  return token;
};

// 에러 처리 함수
const handleError = (error) => {
  if (error.status === 401) {
    console.error('인증 실패:', error);
    return { error: '인증이 필요합니다. 다시 로그인해주세요.' };
  }
  if (error.status === 403) {
    console.error('권한 없음:', error);
    return { error: '해당 작업에 대한 권한이 없습니다.' };
  }
  if (error.status === 404) {
    console.error('리소스 없음:', error);
    return { error: '요청한 리소스를 찾을 수 없습니다.' };
  }
  console.error('API 에러:', error);
  return { error: error.data?.detail || '알 수 없는 오류가 발생했습니다.' };
};

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ 
    baseUrl: `${BASE_URL}/api`,
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
      const token = getToken();
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['User'],
  endpoints: (builder) => ({
    // ✅ 이메일 인증 코드 요청 API
    sendEmailCode: builder.mutation({
      query: ({ email }) => ({
        url: `/auth/send-code`,
        method: "POST",
        body: { email },
      }),
      transformErrorResponse: handleError,
    }),

    // ✅ 닉네임 중복 확인 API
    checkNickname: builder.query({
      query: (nickname) => ({
        url: `/auth/check-nickname`,
        method: 'GET',
        params: { nickname },
        credentials: 'include',
      }),
      transformErrorResponse: handleError,
    }),

    // ✅ 회원가입 API
    registerUser: builder.mutation({
      query: ({ email, password, nickname, code }) => ({
        url: `/auth/register`,
        method: "POST",
        body: { email, password, nickname, code },
      }),
      transformErrorResponse: handleError,
    }),

    // ✅ 로그인 API
    loginUser: builder.mutation({
      query: ({ email, password }) => ({
        url: `/auth/login`,
        method: "POST",
        body: { email, password },
      }),
      transformErrorResponse: handleError,
    }),

    // ✅ 로그아웃 API
    logoutUser: builder.mutation({
      query: () => ({
        url: `/auth/logout`,
        method: "POST",
        credentials: "include",
      }),
      transformErrorResponse: handleError,
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(logout());
          localStorage.removeItem('token');
          localStorage.removeItem('user');
        } catch (error) {
          console.error('로그아웃 실패:', error);
        }
      },
    }),

    // ✅ 현재 로그인한 사용자 정보 조회 API
    getCurrentUser: builder.query({
      query: () => ({
        url: `/auth/me`,
        method: "GET",
      }),
      providesTags: ['User'],
      transformErrorResponse: handleError,
    }),

    // ✅ 회원정보 수정 API
    updateUser: builder.mutation({
      query: (data) => ({
        url: `/auth/update`,
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }),
      invalidatesTags: ['User'],
      transformErrorResponse: handleError,
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
        } catch (error) {
          console.error('회원정보 수정 실패:', error);
        }
      },
    }),

    // ✅ 이메일 인증 코드 확인 API
    verifyEmailCode: builder.mutation({
      query: (data) => ({
        url: `/auth/verify-email`,
        method: 'POST',
        body: data,
      }),
      transformErrorResponse: handleError,
    }),

    // ✅ 비밀번호 재설정 코드 요청 API
    sendResetCode: builder.mutation({
      query: (data) => ({
        url: `/auth/send-reset-code`,
        method: 'POST',
        body: data,
      }),
      transformErrorResponse: handleError,
    }),

    // ✅ 비밀번호 재설정 코드 확인 API
    verifyResetCode: builder.mutation({
      query: (data) => ({
        url: `/auth/verify-reset-code`,
        method: 'POST',
        body: data,
      }),
      transformErrorResponse: handleError,
    }),

    // ✅ 비밀번호 변경 API
    resetPassword: builder.mutation({
      query: (data) => ({
        url: `/auth/reset-password`,
        method: 'POST',
        body: data,
      }),
      transformErrorResponse: handleError,
    }),

    // ✅ 챗봇 API
    sendMessage: builder.mutation({
      query: ({ message, category }) => ({
        url: `/chatbot/${category}`,
        method: "POST",
        body: { message },
      }),
      transformErrorResponse: handleError,
    }),

    // ✅ 현재 비밀번호 확인 API
    verifyCurrentPassword: builder.mutation({
      query: (credentials) => ({
        url: `/auth/verify-password`,
        method: "POST",
        body: credentials,
        headers: {
          "Content-Type": "application/json",
        },
      }),
      transformErrorResponse: handleError,
    }),

    // ✅ 회원탈퇴 API
    deleteUser: builder.mutation({
      query: () => ({
        url: `/auth/withdraw`,
        method: 'DELETE',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      }),
      invalidatesTags: ['User'],
      transformErrorResponse: handleError,
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(logout());
          localStorage.removeItem('token');
          localStorage.removeItem('user');
        } catch (error) {
          console.error('회원탈퇴 실패:', error);
          throw error;
        }
      },
    }),
  }),
});

export const {
  useSendEmailCodeMutation,
  useRegisterUserMutation,
  useLoginUserMutation,
  useGetCurrentUserQuery,
  useVerifyEmailCodeMutation,
  useSendResetCodeMutation,
  useVerifyResetCodeMutation,
  useResetPasswordMutation,
  useLogoutUserMutation,
  useSendMessageMutation,
  useUpdateUserMutation,
  useCheckNicknameQuery,
  useVerifyCurrentPasswordMutation,
  useDeleteUserMutation,
} = authApi;