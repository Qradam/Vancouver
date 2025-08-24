import Link from 'next/link';
import articles from '../../data/articles.json';

export default function ArticlesPage() {
  return (
    <div className="min-h-screen bg-[#150E21] py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <Link 
              href="/"
              className="inline-flex items-center text-white hover:text-pink-400 transition-colors duration-300 mb-4"
            >
              <span className="mr-2">←</span>
              Back to Home
            </Link>
            <h1 className="text-5xl font-bold text-white italic">All Articles</h1>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {articles.map((article, index) => (
            <Link
              key={article.id}
              href={`/article/${article.slug}`}
              className="group block transition-all duration-300"
            >
              <div 
                className="card-updates relative border border-[0.8px] border-w33 -skew-x-12 overflow-hidden h-80 bg-cover bg-center"
                style={{ backgroundImage: `url(${article.image})` }}
              >
                <div className="skew-x-12 h-full flex flex-col justify-between p-4">
                  {/* Title */}
                  <div className="mt-4 pl-4">
                    <h3 className="text-white font-semibold text-base">{article.title}</h3>
                  </div>
                  
                  {/* Buttons - Floating Right */}
                  <div className="flex flex-col items-end space-y-2 mb-4 pr-2">
                    <button className="angled-button bg-blue-600 text-black px-4 py-1 text-sm">
                      <div className="angled-button-content">
                        {article.type}
                      </div>
                    </button>
                    <button className="angled-button bg-pink-600 text-black px-4 py-1 text-sm mr-2">
                      <div className="angled-button-content">
                        SEE MORE
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
