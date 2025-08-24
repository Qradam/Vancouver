import { notFound } from 'next/navigation';
import Link from 'next/link';
import articles from '../../../data/articles.json';

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = articles.find(article => article.slug === params.slug);

  if (!article) {
    console.log('Article not found for slug:', params.slug);
    console.log('Available slugs:', articles.map(a => a.slug));
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#150E21] py-12 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link 
          href="/articles"
          className="inline-flex items-center text-white hover:text-pink-400 transition-colors duration-300 mb-8"
        >
          <span className="mr-2">←</span>
          Back to All Articles
        </Link>

        {/* Article Header */}
        <div className="bg-[#150E2190] border border-[0.8px] border-w33 p-8 mb-8">
          <div className="flex items-center justify-between mb-4">
            <span className="angled-button bg-blue-600 text-white px-4 py-2">
              <div className="angled-button-content">
                {article.type}
              </div>
            </span>
            <span className="text-gray-400 text-sm">{article.date}</span>
          </div>
          
          <h1 className="text-4xl font-bold text-white mb-4">{article.title}</h1>
          <p className="text-gray-300 text-lg mb-4">{article.excerpt}</p>
          <p className="text-gray-400">By {article.author}</p>
        </div>

        {/* Article Image */}
        <div className="bg-[#150E2190] border border-[0.8px] border-w33 mb-8 overflow-hidden">
          <div 
            className="w-full h-64 bg-cover bg-center"
            style={{ backgroundImage: `url(${article.image})` }}
          ></div>
        </div>

        {/* Article Content */}
        <div className="bg-[#150E2190] border border-[0.8px] border-w33 p-8">
          <div className="prose prose-invert max-w-none">
            <p className="text-white leading-relaxed text-lg">
              {article.content}
            </p>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-white mb-6">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articles
              .filter(a => a.id !== article.id)
              .slice(0, 2)
              .map(relatedArticle => (
                <Link
                  key={relatedArticle.id}
                  href={`/article/${relatedArticle.slug}`}
                  className="group block transition-all duration-300 hover:scale-105"
                >
                  <div className="bg-[#150E2190] border border-[0.8px] border-w33 overflow-hidden">
                    <div 
                      className="w-full h-32 bg-cover bg-center"
                      style={{ backgroundImage: `url(${relatedArticle.image})` }}
                    ></div>
                    <div className="p-4">
                      <h3 className="text-white font-semibold mb-2">{relatedArticle.title}</h3>
                      <p className="text-gray-400 text-sm">{relatedArticle.excerpt.substring(0, 100)}...</p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

