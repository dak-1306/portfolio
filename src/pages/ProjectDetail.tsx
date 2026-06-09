import React, { useMemo } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Autoplay from "embla-carousel-autoplay";
import Github from "@/assets/icons/github.svg?react";
import {
  ArrowLeft,
  ExternalLink,
  Calendar,
  User,
  Layers,
  Rocket,
  Terminal,
  ChevronRight,
  AlertCircle,
} from "lucide-react";

import { projectSample } from "@/data/project"; // Import data
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import CosmicBackground from "@/components/cosmic/background/CosmicBackground";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { pageTransition } from "@/motion/page";

const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const plugin = useMemo(
    () =>
      Autoplay({
        delay: 2000,
        stopOnInteraction: true,
      }),
    [],
  );

  const navigate = useNavigate();

  // Tìm project hiện tại
  const project = projectSample.find((p) => p.slug === slug);
  const id = project?.id; // Lấy ID để tính toán dự án tiếp theo

  // Logic chuyển sang project tiếp theo
  const nextId = (parseInt(id || "1") + 1).toString();
  const nextProject = projectSample.find((p) => p.id === nextId);
  const nextSlug = nextProject ? nextProject.slug : null;

  // Xử lý khi không tìm thấy project (ID sai)
  if (!project) {
    return (
      <div className="h-screen flex flex-col items-center justify-center gap-4 bg-background text-foreground">
        <AlertCircle size={48} className="text-destructive animate-pulse" />
        <h2 className="text-2xl font-bold">Project not found</h2>
        <Button onClick={() => navigate("/projects")}>Back to list</Button>
      </div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <CosmicBackground />
      <motion.div
        key={id} // Quan trọng: Re-animate khi ID thay đổi
        variants={pageTransition}
        initial="initial"
        animate="animate"
        exit="exit"
        className="min-h-screen text-foreground py-12 px-4 md:px-8 relative z-10"
      >
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Header Nav */}

          <Button
            variant="ghost"
            className="gap-2 group"
            onClick={() => navigate("/")}
          >
            <ArrowLeft
              size={18}
              className="group-hover:-translate-x-1 transition-transform"
            />
            Home
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* LEFT CONTENT */}
            <div className="lg:col-span-8 space-y-8">
              <header className="space-y-4">
                <motion.h1
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="text-4xl lg:text-6xl font-heading font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
                >
                  {project.title}
                </motion.h1>
                <div className="flex items-center gap-4">
                  <Badge className="bg-primary/10 text-primary border-primary/20">
                    Project ID: {project.id}
                  </Badge>
                  <p className="text-xl text-muted-foreground font-sans leading-relaxed">
                    {project.subtitle}
                  </p>
                </div>
              </header>

              <Carousel
                className="rounded-lg overflow-hidden border border-border bg-card shadow-lg"
                plugins={[plugin]}
              >
                <CarouselContent>
                  {project.image.map((img, i) => (
                    <CarouselItem key={i}>
                      <img
                        src={img}
                        alt={project.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>

              <div className="space-y-12">
                <section className="space-y-4">
                  <h3 className="text-2xl font-heading font-bold text-secondary flex items-center gap-3">
                    <Terminal size={24} /> Project overview
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {project.description}
                  </p>
                </section>

                <section className="space-y-6">
                  <h3 className="text-2xl font-heading font-bold text-accent flex items-center gap-3">
                    <Rocket size={24} /> Project features
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.features.map((f, i) => (
                      <div
                        key={i}
                        className="p-4 rounded-xl border border-border/50 bg-card/50 flex items-center gap-3"
                      >
                        <div className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_8px_var(--accent)]" />
                        <span className="text-sm font-medium">{f}</span>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </div>

            {/* RIGHT SIDEBAR (Sticky) */}
            <aside className="lg:col-span-4">
              <div className="sticky top-10 space-y-6">
                <Card className="bg-card/40 backdrop-blur-xl border-border shadow-2xl">
                  <CardHeader>
                    <CardTitle className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-bold">
                      Implementation details
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground flex items-center gap-2">
                          <User size={14} /> Role
                        </span>
                        <span className="text-sm font-semibold">
                          {project.role}
                        </span>
                      </div>
                      <Separator className="opacity-50" />
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground flex items-center gap-2">
                          <Calendar size={14} /> Duration
                        </span>
                        <span className="text-sm font-semibold">
                          {project.duration}
                        </span>
                      </div>
                      <Separator className="opacity-50" />
                      <div className="space-y-3">
                        <span className="text-sm text-muted-foreground flex items-center gap-2">
                          <Layers size={14} /> Stack
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.map((t) => (
                            <Badge
                              key={t}
                              variant="outline"
                              className="bg-muted/50 border-border"
                            >
                              {t}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 space-y-3">
                      <Button
                        onClick={() => window.open(project.liveUrl, "_blank")}
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold h-12 rounded-xl gap-2 shadow-lg shadow-primary/20 cursor-pointer"
                      >
                        <ExternalLink size={18} /> Live Demo
                      </Button>
                      <Button
                        onClick={() => window.open(project.githubUrl, "_blank")}
                        variant="outline"
                        className="w-full h-12 rounded-xl gap-2 border-border cursor-pointer"
                      >
                        <Github className="w-4 h-4" /> GitHub Repo
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Next Project Card (Logic + 1) */}

                <Link
                  to={`${nextProject ? `/project/${nextSlug}` : `/project/${projectSample[0].slug}`}`}
                >
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="p-6 rounded-2xl border border-dashed border-primary/30 bg-primary/5 group cursor-pointer transition-all hover:bg-primary/10"
                  >
                    <div className="flex justify-between items-center text-primary mb-1">
                      <span className="text-[10px] uppercase font-bold tracking-widest">
                        Next project
                      </span>
                      <ChevronRight size={16} />
                    </div>
                    <h4 className="font-heading font-bold text-lg group-hover:text-secondary transition-colors">
                      {nextProject?.title || projectSample[0].title}
                    </h4>
                  </motion.div>
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectDetail;
