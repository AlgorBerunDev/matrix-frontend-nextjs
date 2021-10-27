import type { NextPage } from 'next'
import Head from 'next/head'
import {SectionSlick, SectionSlick1, SectionMain, SectionStickyContent } from '../components'
import { SectionProjecting } from '../components/SectionProjecting'
import {Gallery} from '../components/Gallery'
import { SectionV1 } from '../components/SectionV1'
import { useGetOurobjectsQuery } from '../features/our-objects'
import { useGetProjectingQuery } from '../features/projecting'
import { useGetOfficialsQuery } from '../features/officials'
import { Brands } from '../components/Brands'
import { Footer } from '../components/Footer'

const contentStyle:{} = {
  height: '700px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#111',
};

const Home: NextPage = () => {
  const ourObjects = useGetOurobjectsQuery(0);
  const projectingContent = useGetProjectingQuery(0);
  const officialsContent = useGetOfficialsQuery(0);

  return (
    <div>
      <Head>
        <title>Matrixfitness</title>
        <meta name="description" content="Matrixfitness one brand many solution" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SectionMain />
      <SectionSlick title='НАШИ ОБЪЕКТЫ' cards={ourObjects.data? ourObjects.data : [] }/>
      
      <SectionProjecting
        data={projectingContent.data}
      />
      <SectionSlick1 title='MATRIX ОФИЦИАЛЬНЫЙ ПОСТАВЩИК' cards={officialsContent.data? officialsContent.data : [] }/>
      <SectionStickyContent />
      <Gallery />
      <SectionV1 />
      <Brands />
      <Footer />
    </div>
  )
}

export default Home
