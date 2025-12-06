export const metadata = {
  title: "BuildMyPC | About Us",
  description: "About BuildMyPC - Custom PCs without the guesswork",
};

export default function About() {
  return (
    <main className="container about-page">
      <section className="section-heading">
        <p className="eyebrow">About BuildMyPC</p>
        <h1>Custom PCs without the guesswork</h1>
        <p>We build PCs for Gods, just kidding, we build them for mere humans,
          but not simple humans, the ones that have the kindest of hearts...
        </p>
      </section>

      <section className="about-story">
        <h2>The story</h2>
        <p>BuildMyPC started as a passion project between friends who built systems for classmates and local
          creators.
          We turned countless late-night troubleshooting sessions into a simple promise: clear advice, compatible
          parts, and builds that stay quiet and cool.</p>
        <p>Did you believe all of this XD? Because I didn&rsquo;t, and I&rsquo;ll recommend you to not too. In reality it&rsquo;s the
          project for one of my classes (I really enjoy the class, actually... strange isn&rsquo;t it?)
        </p>
      </section>

      <section className="about-team">
        <h2>The team</h2>
        <p>We&rsquo;re a team of builders, gamers and passioned people... Damn who do I lie to? Just me, solely me :(</p>
      </section>
    </main>
  );
}

