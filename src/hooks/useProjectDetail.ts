import { useMemo, useEffect } from "react";
import { useParams } from "react-router-dom";
import Autoplay from "embla-carousel-autoplay";
import { projectSample } from "@/data/project"; // Đã đổi tên file data theo chuẩn

export const useProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();

  // Fix triệt để lỗi bị cuộn xuống dưới khi chuyển trang
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [slug]);

  // Plugin Carousel
  const plugin = useMemo(
    () => Autoplay({ delay: 3500, stopOnInteraction: true }),
    [],
  );

  // Tìm project hiện tại & next project
  const currentIndex = useMemo(
    () => projectSample.findIndex((p) => p.slug === slug),
    [slug],
  );

  const project = projectSample[currentIndex];

  const nextProject = useMemo(() => {
    if (currentIndex === -1 || projectSample.length === 0) return null;
    const nextIdx = (currentIndex + 1) % projectSample.length;
    return projectSample[nextIdx];
  }, [currentIndex]);

  return {
    slug,
    project,
    nextProject,
    plugin,
  };
};
