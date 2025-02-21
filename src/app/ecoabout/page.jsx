import Head from 'next/head';

export default function About() {
  return (
    <div>
      <Head>
        <title>EcoBodas - Sobre Nosotros</title>
        <meta name="description" content="Conoce más sobre EcoBodas" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-4xl font-bold text-center mt-10">Sobre Nosotros</h1>
        <p className="text-center mt-4">EcoBodas es una empresa dedicada a ofrecer invitaciones de boda virtuales y ecológicas</p>
      </main>
    </div>
  );
}