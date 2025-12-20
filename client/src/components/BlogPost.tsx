import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShareButtons from "@/components/ShareButtons";
import { useEffect } from 'react';
import { Link } from 'wouter';
import { Helmet } from 'react-helmet-async';

interface BlogPostProps {
  title: string;
  description: string;
  image: string;
  slug: string;
  category: string;
  date: string;
  children: React.ReactNode;
}

export default function BlogPost({ 
  title, 
  description, 
  image, 
  slug, 
  category, 
  date, 
  children 
}: BlogPostProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fullUrl = `https://rescuehomeoffers.com/blog/${slug}`;
  const fullImageUrl = `https://rescuehomeoffers.com${image}`;

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        {/* Primary Meta Tags */}
        <title>{title} | Rescue Home Offers</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content={fullUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={fullImageUrl} />
        <meta property="og:site_name" content="Rescue Home Offers" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={fullUrl} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={fullImageUrl} />

        {/* Article specific */}
        <meta property="article:published_time" content={date} />
        <meta property="article:author" content="England Hart" />
        <meta property="article:section" content={category} />
      </Helmet>

      <Header />
      
      <section className="bg-gradient-to-b from-gray-50 to-white border-b py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-4">
            <Link to="/blog" className="text-[#c9a961] hover:underline">← Back to Blog</Link>
          </div>
          <span className="text-xs font-semibold text-[#c9a961] bg-[#c9a961]/10 px-3 py-1 rounded-full">{category}</span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mt-4">{title}</h1>
          <p className="text-gray-500 mt-4">By England Hart, <em>"your second opinion"</em> • {date}</p>
          
          {/* Share Buttons - Below author line */}
          <ShareButtons url={fullUrl} title={title} description={description} />
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-4xl py-8">
        <div className="rounded-xl overflow-hidden shadow-lg">
          <img 
            src={image} 
            alt={`${title} - Rescue Home Offers Las Vegas Nevada`}
            className="w-full h-64 md:h-96 object-cover"
          />
        </div>
      </div>

      <article className="py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="prose prose-lg prose-gray max-w-none text-gray-700 leading-relaxed">
            {children}
          </div>
          
          {/* Share Buttons - At the end of article */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-600 mb-2">Found this helpful? Share it with someone who needs it.</p>
            <ShareButtons url={fullUrl} title={title} description={description} />
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
