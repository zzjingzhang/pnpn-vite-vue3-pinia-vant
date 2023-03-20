import { onActivated, onDeactivated, onMounted, onUnmounted } from "vue";

export default function useScroll(reachBottomCallBack) {
  const scrollListenerHandler = () => {
    const clientHeight = document.documentElement.clientHeight; // 文档高度
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight; // 可滚动区域
    if (clientHeight + scrollTop >= scrollHeight) {
      reachBottomCallBack && reachBottomCallBack();
    }
  };

  onMounted(() => {
    window.addEventListener("scroll", scrollListenerHandler);
  });
  onActivated(() => {
    window.addEventListener("scroll", scrollListenerHandler);
  });
  onUnmounted(() => {
    window.removeEventListener("scroll", scrollListenerHandler);
  });
  onDeactivated(() => {
    window.removeEventListener("scroll", scrollListenerHandler);
  });
}
