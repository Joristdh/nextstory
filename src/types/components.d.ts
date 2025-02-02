// This file was generated by the storyblok CLI.
// DO NOT MODIFY THIS FILE BY HAND.
import type { ISbStoryData } from "storyblok";
export interface FeatureStoryblok {
  headline: string;
  content: string;
  component: "feature";
  _uid: string;
  [k: string]: any;
}

export interface GridStoryblok {
  headline?: string;
  Items: (FeatureStoryblok | TestimonialStoryblok)[];
  component: "grid";
  _uid: string;
  [k: string]: any;
}

export interface HeroStoryblok {
  headline: string;
  content: string;
  component: "Hero";
  _uid: string;
  [k: string]: any;
}

export interface PageStoryblok {
  body?: (FeatureStoryblok | GridStoryblok | RecommendedToursStoryblok | TestimonialStoryblok | HeroStoryblok)[];
  component: "page";
  _uid: string;
  [k: string]: any;
}

export interface AssetStoryblok {
  alt: string | null;
  copyright?: string | null;
  fieldtype: "asset";
  id: number;
  filename: string | null;
  name: string;
  title: string | null;
  focus: string | null;
  meta_data?: {
    [k: string]: any;
  };
  source?: string | null;
  is_external_url?: boolean;
  is_private?: boolean;
  src?: string;
  updated_at?: string;
  width?: number | null;
  height?: number | null;
  aspect_ratio?: number | null;
  public_id?: string | null;
  content_type?: string;
  [k: string]: any;
}

export interface ProductStoryblok {
  name: string;
  price: string;
  main_image: AssetStoryblok;
  location: "" | "Taipei" | "Jiufen" | "Kaoshun" | "Eindhoven";
  body: string;
  SKU: string;
  component: "product";
  _uid: string;
  [k: string]: any;
}

export interface RecommendedToursStoryblok {
  headline: string;
  tours: (ISbStoryData<TourStoryblok> | string)[];
  component: "recommended_tours";
  _uid: string;
  [k: string]: any;
}

export interface TeaserStoryblok {
  headline?: string;
  component: "teaser";
  _uid: string;
  [k: string]: any;
}

export interface TestimonialStoryblok {
  name: string;
  comment: string;
  component: "testimonial";
  _uid: string;
  [k: string]: any;
}

export interface RichtextStoryblok {
  type: string;
  content?: RichtextStoryblok[];
  marks?: RichtextStoryblok[];
  attrs?: any;
  text?: string;
  [k: string]: any;
}

export interface TourStoryblok {
  name: string;
  introduction: string;
  price: string;
  main_image: AssetStoryblok;
  location: "" | "Taipei" | "Jiufen" | "Kaoshun";
  body: RichtextStoryblok;
  component: "tour";
  _uid: string;
  [k: string]: any;
}
