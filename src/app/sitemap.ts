import { BlogArticleModel } from '@/types/models';
import { getAllBlogs } from '@/services/blog.service';
import { METADATA_INFOS } from '@/utils/constants';
import { MetadataRoute } from 'next'
 
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

  const blogPosts: BlogArticleModel[] = getAllBlogs();
  const URL = METADATA_INFOS.BASE_URL;

  const sitemap : MetadataRoute.Sitemap = [
    {
      url: URL,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: URL + '/a-propos',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: URL + '/blog',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    }
  ]

  blogPosts.forEach(blog => {
    const siteMapItem  = {
      url: URL + '/blog/' + blog.slug,
      lastModified: new Date(),
      changeFrequency: "monthly" as "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never",
      priority: 0.5
    }

    sitemap.push(siteMapItem)
  })
  return sitemap
}