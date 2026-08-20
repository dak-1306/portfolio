import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
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
import {
  pageTransition,
  staggerContainer,
  staggerItem,
  cardVariants,
  sectionReveal,
} from "@/motion";
import CometTextReveal from "@/components/common/CometTextReveal";
import { useProjectDetail } from "@/hooks/useProjectDetail";

const ProjectDetail: React.FC = () => {
  const navigate = useNavigate();
  const { slug, project, nextProject, plugin } = useProjectDetail();

  if (!project) {
    return (
      <div className="h-screen flex flex-col items-center justify-center gap-4 bg-background text-foreground">
        <AlertCircle size={48} className="text-destructive animate-pulse" />
        <h2 className="text-2xl font-bold">Project not found</h2>
        <Button onClick={() => navigate("/")}>Back to Home</Button>
      </div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <CosmicBackground />
      <motion.div
        key={slug}
        variants={pageTransition}
        initial="initial"
        animate="animate"
        exit="exit"
        className="min-h-screen text-foreground py-12 px-4 md:px-8 relative z-10"
      >
        <div className="relative z-10 max-w-7xl mx-auto space-y-8">
          {/* Back Button */}
          <motion.div variants={staggerItem} initial="hidden" animate="visible">
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
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Main Content */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="lg:col-span-8 space-y-8"
            >
              {/* Header Info */}
              <header className="space-y-4">
                <CometTextReveal
                  as="h1"
                  text={project.title}
                  delay={0.3}
                  duration={2}
                  className="text-4xl font-black leading-tight lg:text-6xl"
                />

                <motion.div
                  variants={staggerItem}
                  className="flex flex-wrap items-center gap-4"
                >
                  <Badge className="bg-primary/10 text-primary border-primary/20">
                    Project ID: {project.id}
                  </Badge>
                  <p className="text-xl text-muted-foreground font-sans leading-relaxed">
                    {project.subtitle}
                  </p>
                </motion.div>
              </header>

              {/* Carousel Showcase */}
              <motion.div variants={sectionReveal}>
                <Carousel
                  className="rounded-xl overflow-hidden border border-border bg-card shadow-2xl"
                  plugins={[plugin]}
                >
                  <CarouselContent>
                    {project.image.map((img, i) => (
                      <CarouselItem key={i}>
                        <div className="aspect-video w-full overflow-hidden">
                          <img
                            src={img}
                            alt={`${project.title} preview ${i + 1}`}
                            loading="lazy"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 transform-gpu"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-4" />
                  <CarouselNext className="right-4" />
                </Carousel>
              </motion.div>

              {/* Description & Features */}
              <div className="space-y-12">
                <motion.section variants={staggerItem} className="space-y-4">
                  <h3 className="text-2xl font-heading font-bold text-secondary flex items-center gap-3">
                    <Terminal size={24} /> Project Overview
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {project.description}
                  </p>
                </motion.section>

                <motion.section variants={staggerItem} className="space-y-6">
                  <h3 className="text-2xl font-heading font-bold text-accent flex items-center gap-3">
                    <Rocket size={24} /> Key Features
                  </h3>

                  <motion.div
                    variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  >
                    {project.features.map((f, i) => (
                      <motion.div
                        key={i}
                        variants={staggerItem}
                        whileHover={{ scale: 1.02 }}
                        className="p-4 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm flex items-center gap-3"
                      >
                        <div className="h-2 w-2 rounded-full bg-accent shadow-[0_0_8px_var(--accent)] shrink-0" />
                        <span className="text-sm font-medium">{f}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.section>
              </div>
            </motion.div>

            {/* Sidebar Details */}
            <aside className="lg:col-span-4">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="sticky top-10 space-y-6"
              >
                {/* Specs Card */}
                <motion.div variants={cardVariants}>
                  <Card className="bg-card/40 backdrop-blur-xl border-border shadow-2xl">
                    <CardHeader>
                      <CardTitle className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-bold">
                        Implementation Details
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
                            <Layers size={14} /> Tech Stack
                          </span>
                          <motion.div
                            variants={staggerContainer}
                            className="flex flex-wrap gap-2"
                          >
                            {project.techStack.map((t) => (
                              <motion.div key={t} variants={staggerItem}>
                                <Badge
                                  variant="outline"
                                  className="bg-muted/50 border-border hover:border-secondary/50 transition-colors"
                                >
                                  {t}
                                </Badge>
                              </motion.div>
                            ))}
                          </motion.div>
                        </div>
                      </div>

                      <div className="pt-4 space-y-3">
                        <Button
                          onClick={() =>
                            window.open(
                              project.liveUrl,
                              "_blank",
                              "noopener,noreferrer",
                            )
                          }
                          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold h-12 rounded-xl gap-2 shadow-lg shadow-primary/20 cursor-pointer transition-transform active:scale-95"
                        >
                          <ExternalLink size={18} /> Live Demo
                        </Button>
                        <Button
                          onClick={() =>
                            window.open(
                              project.githubUrl,
                              "_blank",
                              "noopener,noreferrer",
                            )
                          }
                          variant="outline"
                          className="w-full h-12 rounded-xl gap-2 border-border cursor-pointer transition-transform active:scale-95"
                        >
                          <Github className="w-4 h-4" /> GitHub Repo
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Next Project Link */}
                {nextProject && (
                  <Link to={`/project/${nextProject.slug}`}>
                    <motion.div
                      variants={cardVariants}
                      whileHover="hover"
                      className="p-6 rounded-2xl border border-dashed border-primary/30 bg-primary/5 group cursor-pointer transition-colors hover:bg-primary/10"
                    >
                      <div className="flex justify-between items-center text-primary mb-1">
                        <span className="text-[10px] uppercase font-bold tracking-widest">
                          Next Project
                        </span>
                        <ChevronRight
                          size={16}
                          className="group-hover:translate-x-1 transition-transform"
                        />
                      </div>
                      <h4 className="font-heading font-bold text-lg group-hover:text-secondary transition-colors">
                        {nextProject.title}
                      </h4>
                    </motion.div>
                  </Link>
                )}
              </motion.div>
            </aside>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectDetail;
