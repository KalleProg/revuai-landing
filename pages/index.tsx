import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>RevuAI</title>
        <meta name="description" content="AI-drevet innsikt fra kundetilbakemeldinger" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-slate-950 to-slate-900 text-white px-6 py-12 flex flex-col items-center justify-center">
        <div className="max-w-2xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">RevuAI</h1>
          <p className="text-xl mb-8">
            Få umiddelbar innsikt fra anmeldelser og tilbakemeldinger – med AI.
          </p>

          <form
            action="https://formsubmit.co/your@email.com"
            method="POST"
            className="flex flex-col md:flex-row items-center gap-4 justify-center"
          >
            <input
              type="email"
              name="email"
              required
              placeholder="Din e-post"
              className="px-4 py-2 rounded-xl text-black w-64"
            />
            <button
              type="submit"
              className="bg-indigo-500 hover:bg-indigo-600 transition px-6 py-2 rounded-xl font-semibold"
            >
              Bli med på venteliste
            </button>
          </form>

          <p className="text-sm text-slate-400 mt-6">
            PS: Du blir varslet når vi lanserer betaen.
          </p>
        </div>
      </main>
    </>
  );
}
