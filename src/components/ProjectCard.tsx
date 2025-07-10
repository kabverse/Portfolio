
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import GlowingButton from './GlowingButton';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  demoUrl: string;
}

const ProjectCard = ({ title, description, technologies, image, demoUrl }: ProjectCardProps) => {
  return (
    <Card className="group relative overflow-hidden glass-card hover:scale-105 transition-all duration-500 border-primary/20 hover:border-primary/40">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
          <div className="flex gap-4">
            <GlowingButton size="sm" onClick={() => window.open(demoUrl, '_blank')}>
              <ExternalLink className="h-4 w-4" />
              Demo
            </GlowingButton>
          </div>
        </div>
      </div>
      
      <CardHeader className="relative z-10">
        <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
          {title}
        </CardTitle>
        <CardDescription className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="relative z-10">
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge 
              key={tech} 
              variant="secondary" 
              className="text-xs bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-300"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
