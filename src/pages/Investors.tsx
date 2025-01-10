import React from 'react';
import { ArrowUpRight, TrendingUp, DollarSign, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Investors = () => {
  const stats = [
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Growth Rate",
      value: "127%",
      description: "Year over year growth"
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Revenue",
      value: "$2.4M",
      description: "Annual revenue 2023"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Clients",
      value: "500+",
      description: "Active clients"
    }
  ];

  return (
    <div className="bg-deep-black text-pure-white py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Investor Relations</h1>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="bg-matte-black p-6 rounded-lg border border-gray-800">
                <div className="text-pure-white mb-4">{stat.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{stat.title}</h3>
                <p className="text-2xl font-bold text-pure-white mb-2">{stat.value}</p>
                <p className="text-off-white text-sm">{stat.description}</p>
              </div>
            ))}
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Investment Opportunities</h2>
              <p className="text-off-white mb-4">
                Bills Co. offers various investment opportunities across our diverse portfolio of services, 
                including labour, beautification, web development, and music production.
              </p>
              <div className="bg-matte-black p-6 rounded-lg border border-gray-800">
                <h3 className="text-xl font-semibold mb-4">Current Investment Round</h3>
                <ul className="space-y-2 text-off-white">
                  <li>• Seeking $5M in Series A funding</li>
                  <li>• Expansion into international markets</li>
                  <li>• Technology infrastructure development</li>
                  <li>• Minimum investment: $50,000</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Why Invest in Bills Co.?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-matte-black p-6 rounded-lg border border-gray-800">
                  <h3 className="text-xl font-semibold mb-2">Market Position</h3>
                  <p className="text-off-white">
                    Leading provider of integrated physical and digital services in New Zealand, 
                    with growing international presence.
                  </p>
                </div>
                <div className="bg-matte-black p-6 rounded-lg border border-gray-800">
                  <h3 className="text-xl font-semibold mb-2">Growth Strategy</h3>
                  <p className="text-off-white">
                    Focused on technological innovation and market expansion through strategic partnerships.
                  </p>
                </div>
              </div>
            </section>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="button-gradient px-6 py-3 rounded-lg inline-flex items-center justify-center"
              >
                Contact Investor Relations <ArrowUpRight className="ml-2" />
              </Link>
              <a 
                href="/investors.pdf" 
                className="bg-transparent border-2 border-pure-white px-6 py-3 rounded-lg text-center hover:bg-white/10 transition-colors"
              >
                Download Investor Deck
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Investors;