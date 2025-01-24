"use client";

import { getStoryblokApi } from "@/storyblok";
import type { PropsWithChildren } from "react";

export const StoryblokProvider = ({ children }: PropsWithChildren) => {
    getStoryblokApi();
    return <>{children}</>;
};
