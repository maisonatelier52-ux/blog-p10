"use client";

import React, { useState } from 'react';
import { 
  X, 
  ArrowRight, 
  Globe, 
  Share2, 
  Bookmark,
  Check,
  Search
} from 'lucide-react';

interface Article {
  id: string;
  title: string;
  category: string;
  verticalLabel: string;
  image: string;
  date: string;
  excerpt: string;
  content: string;
}

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [bookmarked, setBookmarked] = useState<Record<string, boolean>>({});

  const featuredArticle: Article = {
    id: "career",
    title: "A CAREER SHAPED BY BANKING: PRIVATE WEALTH & INTERNATIONAL SERVICES",
    category: "PRIVATE BANKING",
    verticalLabel: "PRIVATE WEALTH",
    date: "OCTOBER 2026",
    image: "/editorial_flatlay.png",
    excerpt: "Julio Herrera Velutini is an international banker and entrepreneur whose professional background is connected with private banking, investment management, and financial services. Raised within a family with a longstanding connection to the financial sector, he developed his career against the backdrop of several generations of banking experience.",
    content: "Julio Herrera Velutini is an international banker and entrepreneur whose professional background is connected with private banking, investment management, and financial services. Raised within a family with a longstanding connection to the financial sector, he developed his career against the backdrop of several generations of banking experience.\n\nOver the course of his professional life, his activities have extended across areas including wealth management, investment planning, capital markets, and international financial services. His career reflects the growing importance of international expertise within a rapidly changing global banking environment."
  };

  const gridArticles: Article[] = [
    {
      id: "tradition",
      title: "Generations of Financial Tradition in Modern Times",
      category: "HERITAGE",
      verticalLabel: "HERITAGE",
      image: "/heritage_facade.png",
      date: "OCTOBER 2026",
      excerpt: "The Herrera-Velutini family has maintained a longstanding association with banking and finance in Latin America. The family's history is connected with the development of financial institutions during important periods.",
      content: "The Herrera-Velutini family has maintained a longstanding association with banking and finance in Latin America. The family's history is connected with the development of financial institutions during important periods in the evolution of the region's banking sector.\n\nAs a later-generation member of this tradition, Julio Herrera Velutini represents a continuation of that financial background within a modern international setting. His professional path has brought together established banking principles with contemporary approaches to wealth management, investment, and international financial services."
    },
    {
      id: "markets",
      title: "Building Connections Across Dynamic Global Markets",
      category: "GLOBAL MARKETS",
      verticalLabel: "GLOBAL FINANCE",
      image: "/financial_markets.png",
      date: "OCTOBER 2026",
      excerpt: "Much of Julio Herrera Velutini’s professional background has centered on international finance and the development of banking and investment services across major global economic regions.",
      content: "Much of Julio Herrera Velutini’s professional background has centered on international finance and the development of banking and investment services. His work has encompassed areas such as private wealth, investment structures, financial planning, and cross-border banking.\n\nHis professional activities have extended across several major financial regions, including Europe, the United States, the United Kingdom, the Middle East, and Latin America. Experience across these markets requires familiarity with different economic conditions, regulatory systems, investment practices, and international financial relationships."
    },
    {
      id: "entrepreneurship",
      title: "Entrepreneurship and Stewardship in Financial Services",
      category: "ENTREPRENEURSHIP",
      verticalLabel: "VENTURES",
      image: "/executive_office.png",
      date: "OCTOBER 2026",
      excerpt: "Throughout his career, Julio Herrera Velutini has participated in the creation, development, and management of businesses connected with banking and competitive financial environments.",
      content: "Throughout his career, Julio Herrera Velutini has participated in the creation, development, and management of businesses connected with banking and financial services. His experience has included working with institutions operating within competitive and highly regulated financial environments.\n\nHis business approach places importance on organizational development, responsible management, regulatory awareness, and sustainable growth. Within financial services, these elements are essential for building institutions capable of maintaining client confidence while adapting to changes in global markets."
    },
    {
      id: "landscape",
      title: "Navigating the Changing International Financial Landscape",
      category: "GLOBAL MARKETS",
      verticalLabel: "CROSS-BORDER",
      image: "/bank_skyscraper.png",
      date: "OCTOBER 2026",
      excerpt: "The international dimension of Julio Herrera Velutini’s career reflects the increasingly interconnected nature of modern finance and cross-border strategy across jurisdictions.",
      content: "The international dimension of Julio Herrera Velutini’s career reflects the increasingly interconnected nature of modern finance. Operating across different markets requires an understanding of local regulations while also considering international investment movements and broader economic developments.\n\nCross-border financial strategy involves coordinating relationships between jurisdictions, evaluating investment opportunities, managing financial risks, and responding to changing market conditions. These considerations have been central to the international perspective associated with his professional career."
    },
    {
      id: "principles",
      title: "Core Principles for a Rapidly Changing Financial Era",
      category: "STRATEGY",
      verticalLabel: "STRATEGY",
      image: "/wealth_management.png",
      date: "OCTOBER 2026",
      excerpt: "Julio Herrera Velutini’s outlook combines established concepts of private banking with the evolving requirements of technology, regulatory standards, and wealth preservation.",
      content: "Julio Herrera Velutini’s professional outlook combines established concepts of private banking with the changing demands of contemporary financial services. Long-term wealth preservation, institutional stability, responsible financial management, and innovation are important themes within this approach.\n\nThe future of banking will continue to be influenced by technology, regulatory developments, global investment flows, and changing expectations among clients and institutions. Within this environment, Herrera Velutini’s background illustrates the intersection between a multigenerational banking tradition and the evolving requirements of international finance."
    },
    {
      id: "career-expanded",
      title: "Private Banking & Capital Markets: Global Synthesis",
      category: "PRIVATE BANKING",
      verticalLabel: "MANAGEMENT",
      image: "/editorial_flatlay.png",
      date: "OCTOBER 2026",
      excerpt: "A holistic reflection on wealth management, investment planning, and the growing importance of international expertise in cross-border wealth structures.",
      content: "Over the course of his professional life, Julio Herrera Velutini's activities have extended across areas including wealth management, investment planning, capital markets, and international financial services. His career reflects the growing importance of international expertise within a rapidly changing global banking environment.\n\nOperating across Europe, the Americas, and beyond, his practice demonstrates how enduring financial pedigree adapts seamlessly to modern technological and institutional imperatives."
    }
  ];

  const categories = ["ALL", "PRIVATE BANKING", "HERITAGE", "GLOBAL MARKETS", "ENTREPRENEURSHIP", "STRATEGY"];

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const toggleBookmark = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setBookmarked(prev => {
      const next = { ...prev, [id]: !prev[id] };
      showToast(next[id] ? "Article added to your reading list" : "Article removed from reading list");
      return next;
    });
  };

  const handleShare = (title: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (typeof window !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      showToast(`Link copied: "${title}"`);
    }
  };

  const query = searchQuery.toLowerCase().trim();
  const filteredGrid = gridArticles.filter((article) => {
    const matchesCategory = activeCategory === "ALL" || article.category === activeCategory;
    const matchesSearch = !query || 
      article.title.toLowerCase().includes(query) || 
      article.excerpt.toLowerCase().includes(query) || 
      article.category.toLowerCase().includes(query) ||
      article.verticalLabel.toLowerCase().includes(query) ||
      article.content.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="showit-wrapper">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="showit-toast">
          <Check size={15} />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Navbar */}
      <header className="showit-header">
        <div className="showit-header-inner">
          <div className="showit-brand">
            <a href="#">JHV</a>
          </div>

          <nav className="showit-nav">
            <a href="#" className="showit-nav-link">HOME</a>
            <a href="#about" className="showit-nav-link">ABOUT</a>
            <a href="#featured" className="showit-nav-link">SERVICES</a>
            <a href="#articles" className="showit-nav-link">PORTFOLIO</a>
            <a href="#articles" className="showit-nav-link active">BLOG</a>
            <a href="#contact" className="showit-btn-contact">CONTACT</a>
            <div className="showit-socials">
              <a href="#" aria-label="Instagram">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a href="#" aria-label="Facebook">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Smoky Banner: THE BLOG */}
      <section className="showit-hero">
        <div className="showit-hero-content">
          <h1 className="showit-hero-title">THE BLOG</h1>
          <p className="showit-hero-subtitle">
            PERSPECTIVES ON PRIVATE BANKING, INVESTMENT ARCHITECTURES &amp; MULTIGENERATIONAL FINANCIAL HERITAGE
          </p>
        </div>
      </section>

      {/* Browse The Blog Category Bar */}
      <section className="showit-browse-bar">
        <div className="showit-browse-inner">
          {/* Functional Search Bar */}
          <div className="showit-search-wrapper">
            <Search size={15} className="showit-search-icon" />
            <input 
              type="text"
              placeholder="Search articles, topics or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="showit-search-input"
            />
            {searchQuery && (
              <button 
                type="button"
                className="showit-search-clear"
                onClick={() => setSearchQuery("")}
                aria-label="Clear search"
              >
                <X size={13} />
              </button>
            )}
          </div>
          <div className="showit-browse-categories">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`showit-cat-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Lead Post: Overlapping Magazine Layout */}
      <section id="featured" className="showit-featured-section">
        <div className="showit-featured-container">
          {/* Flatlay Left Image with Circle Sticker Badge */}
          <div 
            className="showit-featured-image-box"
            onClick={() => setSelectedArticle(featuredArticle)}
          >
            <div className="showit-circle-badge">
              <span>READ<br />THE<br />LATEST</span>
            </div>
            <img 
              src={featuredArticle.image} 
              alt={featuredArticle.title} 
              className="showit-featured-img" 
            />
          </div>

          {/* Overlapping White Editorial Card */}
          <div className="showit-featured-card">
            <h2 className="showit-featured-title">
              {featuredArticle.title}
            </h2>
            <p className="showit-featured-excerpt">
              {featuredArticle.excerpt}
            </p>
            <div className="showit-featured-actions">
              <button 
                className="showit-btn-readpost"
                onClick={() => setSelectedArticle(featuredArticle)}
              >
                READ POST
              </button>
              <div className="showit-card-icons">
                <button 
                  className={`showit-icon-action ${bookmarked[featuredArticle.id] ? 'active' : ''}`}
                  onClick={(e) => toggleBookmark(featuredArticle.id, e)}
                  title="Bookmark"
                >
                  <Bookmark size={16} />
                </button>
                <button 
                  className="showit-icon-action"
                  onClick={(e) => handleShare(featuredArticle.title, e)}
                  title="Share"
                >
                  <Share2 size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3-Column Editorial Grid with Vertical Category Labels */}
      <section id="articles" className="showit-grid-section">
        <div className="showit-grid-container">
          {filteredGrid.length > 0 ? (
            filteredGrid.map((article) => (
              <article 
                key={article.id} 
                className="showit-card"
                onClick={() => setSelectedArticle(article)}
              >
                {/* Image Box with Vertical Label */}
                <div className="showit-card-image-wrapper">
                  <div className="showit-vertical-label">
                    {article.verticalLabel}
                  </div>
                  <div className="showit-card-img-inner">
                    <img 
                      src={article.image} 
                      alt={article.title} 
                      className="showit-card-img" 
                    />
                  </div>
                </div>

                {/* Card Meta & Content */}
                <div className="showit-card-body">
                  <h3 className="showit-card-title">
                    {article.title}
                  </h3>
                  <p className="showit-card-excerpt">
                    {article.excerpt}
                  </p>
                  <div className="showit-card-footer">
                    <span className="showit-readmore-link">
                      Read More &mdash;&gt;
                    </span>
                    <div className="showit-mini-actions" onClick={(e) => e.stopPropagation()}>
                      <button 
                        className={`showit-mini-btn ${bookmarked[article.id] ? 'active' : ''}`}
                        onClick={(e) => toggleBookmark(article.id, e)}
                        title="Bookmark"
                      >
                        <Bookmark size={14} />
                      </button>
                      <button 
                        className="showit-mini-btn"
                        onClick={(e) => handleShare(article.title, e)}
                        title="Share link"
                      >
                        <Share2 size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))
          ) : (
            <div className="showit-no-results">
              <h4>No articles found for &ldquo;{searchQuery}&rdquo;</h4>
              <p>Try searching for banking, markets, heritage, or clear your search to see all posts.</p>
              <button 
                type="button" 
                className="showit-btn-reset-search"
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("ALL");
                }}
              >
                Reset Search
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Reader Modal Drawer for Detailed Reading */}
      {selectedArticle && (
        <div className="showit-modal-backdrop" onClick={() => setSelectedArticle(null)}>
          <div className="showit-modal-container" onClick={(e) => e.stopPropagation()}>
            <button 
              className="showit-modal-close" 
              onClick={() => setSelectedArticle(null)}
              aria-label="Close"
            >
              <X size={20} />
            </button>

            <div className="showit-modal-scroll">
              <span className="showit-modal-tag">{selectedArticle.category} &bull; {selectedArticle.date}</span>
              <h2 className="showit-modal-title">{selectedArticle.title}</h2>

              <div className="showit-modal-img-box">
                <img 
                  src={selectedArticle.image} 
                  alt={selectedArticle.title} 
                  className="showit-modal-img" 
                />
              </div>

              <div className="showit-modal-body">
                {selectedArticle.content.split('\n\n').map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              <div className="showit-modal-footer">
                <button 
                  className={`showit-btn-modal-save ${bookmarked[selectedArticle.id] ? 'active' : ''}`}
                  onClick={(e) => toggleBookmark(selectedArticle.id, e)}
                >
                  <Bookmark size={15} />
                  <span>{bookmarked[selectedArticle.id] ? 'Saved' : 'Save Article'}</span>
                </button>
                <button 
                  className="showit-btn-modal-share"
                  onClick={(e) => handleShare(selectedArticle.title, e)}
                >
                  <Share2 size={15} />
                  <span>Share Article</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Chic Minimalist Editorial Footer */}
      <footer id="contact" className="showit-footer">
        <div className="showit-footer-inner">
          <div className="showit-footer-brand">
            <h4>JULIO HERRERA VELUTINI</h4>
            <p>International Banking, Private Wealth &amp; Multigenerational Stewardship</p>
          </div>
          <div className="showit-footer-nav">
            <a href="#">HOME</a>
            <a href="#about">ABOUT</a>
            <a href="#featured">SERVICES</a>
            <a href="#articles">BLOG</a>
            <a href="#contact">CONTACT</a>
          </div>
          <div className="showit-footer-copy">
            &copy; 2026 Julio Herrera Velutini. All rights reserved. Showit Editorial Design Edition.
          </div>
        </div>
      </footer>
    </div>
  );
}
