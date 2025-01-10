import React from 'react';

const About = () => {
  return (
    <div className="bg-deep-black text-pure-white py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8">About Bills Co.</h1>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-off-white mb-6">
              Founded in Auckland, Bills Co. has grown from a small startup into a diverse service provider, 
              offering everything from construction to digital solutions. Our mission is to deliver excellence 
              across multiple industries while maintaining the highest standards of quality and customer satisfaction.
            </p>
            <div className="bg-matte-black p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
              <ul className="space-y-3 text-off-white">
                <li>• Excellence in every service</li>
                <li>• Innovation across industries</li>
                <li>• Customer-first approach</li>
                <li>• Sustainable practices</li>
              </ul>
            </div>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Team meeting"
              className="rounded-lg shadow-xl mb-6"
            />
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-matte-black p-4 rounded-lg text-center">
                <h3 className="text-2xl font-bold mb-2">500+</h3>
                <p className="text-off-white">Projects Completed</p>
              </div>
              <div className="bg-matte-black p-4 rounded-lg text-center">
                <h3 className="text-2xl font-bold mb-2">50+</h3>
                <p className="text-off-white">Team Members</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;