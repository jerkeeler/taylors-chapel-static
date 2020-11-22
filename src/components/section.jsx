import React from 'react';

const Title = ({ children }) => (
  <h4 className="font-bold text-3xl mb-4">{children}</h4>
);

const Text = ({ children }) => (
  <p className="text-xl mb-3 last:mb-0">{children}</p>
);

const Section = ({ id, children }) => (
  <section className="py-16" id={id}>
    <div className="container mx-auto px-8">{children}</div>
  </section>
);

Section.Text = Text;
Section.Title = Title;

export default Section;
