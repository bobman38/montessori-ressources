import React from 'react'

import Hero from 'react-bulma-components/lib/components/hero'
import Heading from 'react-bulma-components/lib/components/heading'
import Container from 'react-bulma-components/lib/components/container'
import Content from 'react-bulma-components/lib/components/content'
import Section from 'react-bulma-components/lib/components/section'
import Image from 'react-bulma-components/lib/components/image'

import school from '../../images/school.jpg'

const Info = () => {
  return(
    <>
      <Hero  color="primary" gradient >
        <Hero.Body>
          <Container>
            <Heading>
              <span role="img" aria-label="book">📗</span> Montessori Ressources, une plateforme ouverte et collaborative de matériel Montessori...
            </Heading>
            <Heading subtitle size={3}>

            </Heading>
          </Container>
        </Hero.Body>
      </Hero>

      <Section>
        <Content size="medium">
          <Image  src={school} style={{ width: "50%", marginLeft: "auto",  marginRight: "auto"}}/>
          <p>
          Maria Montessori, nous a légué une philosophie de pensée, une ouverture permettant de
          considérer l’enfant comme étant l’adulte de demain, un apprenant qui se nourrit de son
          environnement.
          </p>
          <p>
          Avec une vision d’ouverture ainsi que la collaboration de chacun, nous avons créé cette
          plateforme qui réunit tous les paramètres optimaux qui répondent aux standards réfléchis par
          Maria Montessori.
          </p>
          <p>
          Nous vous proposons une référence web qui prône un partage dynamique, où chacun est libre
          d’ajouter ou de bonifier les matériels proposés.
          </p>
          <p>
          Nous vous souhaitons du plaisir, ainsi que de répandre la passion et l’émerveillement auprès des
          enfants.
          </p>
        </Content>
      </Section>


    </>



  )
}


export default Info
