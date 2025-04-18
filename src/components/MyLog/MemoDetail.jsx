import React, { useEffect } from "react";

const MemoDetail = ({ isOpen, memo, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      // 메모 모달이 열렸음을 알림
      window.dispatchEvent(
        new CustomEvent("memoModalState", { detail: { isOpen: true } })
      );
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      // 메모 모달이 닫혔음을 알림
      window.dispatchEvent(
        new CustomEvent("memoModalState", { detail: { isOpen: false } })
      );
    }

    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      // 컴포넌트가 언마운트될 때 메모 모달이 닫혔음을 알림
      window.dispatchEvent(
        new CustomEvent("memoModalState", { detail: { isOpen: false } })
      );
    };
  }, [isOpen]);

  if (!isOpen || !memo) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
      <div className="fixed inset-0 bg-black/40 pointer-events-auto z-[30]">
        <div className="absolute inset-0 backdrop-blur-sm"></div>
      </div>
      <div className="container mx-auto relative z-[60]">
        <div className="left-layout bg-[#f7f6f4] rounded-xl sm:w-[900px] w-[95%] sm:h-[820px] h-[600px] sm:p-8 p-4 sm:mt-[65px] mt-[40px] sm:border sm:border-gray-300 border-0 pointer-events-auto">
          {/* 상단 제목과 버튼 */}
          <div className="relative flex justify-end mb-16">
            <h2 className="absolute left-1/2 sm:top-6 top-10 -translate-x-1/2 -translate-y-1/2 sm:text-2xl text-xl font-bold">
              메모 상세보기
            </h2>
          </div>

          {/* 구분선 */}
          <div className="border-b border-1 border-Main shadow-sm mb-6"></div>

          {/* 알림 설정 표시 영역 */}
          <div className="flex justify-end h-[20px]">
            {memo.notification && memo.event_date && (
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  <span className="sm:text-sm text-xs font-medium text-gray-700 cursor-default">
                    알림 설정일:
                  </span>
                  <span className="ml-2 sm:text-sm text-xs text-gray-700 cursor-default">
                    {new Date(memo.event_date).toLocaleDateString()}
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* 메모 내용 영역 */}
          <div className="sm:h-[600px] h-[400px]">
            {/* 제목 영역 */}
            <div className="mb-4">
              <label className="block sm:text-lg text-base font-semibold mb-2">
                제목
              </label>
              <div className="w-full sm:p-3 p-2 border-b-2 border-gray-300 sm:text-lg text-base bg-transparent">
                {memo.title}
              </div>
            </div>

            {/* 내용 영역 */}
            <div>
              <label className="block sm:text-lg text-base font-semibold mb-2">
                내용
              </label>
              <div className="w-full sm:h-[400px] h-[280px] sm:p-6 p-3 border-2 border-gray-300 rounded-lg sm:text-lg text-base bg-transparent whitespace-pre-wrap overflow-y-auto break-words">
                {memo.content}
              </div>
            </div>

            <div className="flex justify-center gap-5 sm:mt-[25px] mt-[15px]">
              <button
                onClick={onClose}
                className="sm:px-6 px-4 sm:py-3 py-2 sm:text-base text-sm bg-Main text-white rounded-lg border border-gray-300 hover:bg-Main_hover"
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemoDetail;
