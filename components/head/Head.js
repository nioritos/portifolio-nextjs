import Head from 'next/head';
import Favicon from '../../public/dev-ed-wave.png';

function HeadPage() {
    return(
        <Head>
        <title>Nioritos</title>
        <meta name="description" content="Nioritos's portifolio, here you will look my knowledges, projects and more about me" />
        <link rel="icon" href={Favicon} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
    )
};

export default HeadPage;