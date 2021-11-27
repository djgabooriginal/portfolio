import { Box, Main, Paragraph } from 'grommet'
import React from 'react'
import { customTheme } from '../theme'
import { AppHeader } from './AppHeader'
import { Cover } from './Cover'

export const InfoPage = (props) => {
  const parr = `Director de producción de eventos corporativos y de entretenimiento,
  con su experiencia en todos los campos dentro de una produccion
  general, logrará que su evento sea recordado y recomendado.`

  const parr2 = `Basandose en la comunicacion, atencion al cliente, produccion,
  operaciones y marketing aportará un brainstorm creativo, para asi
  lograr los objetivos trazados teniendo en cuenta, su presupuesto,
  target, el mensaje que desea transmitir y las emociones que espera
  despertar. Desarrollando desde el diseño y creacion de escenarios
  virtuales y fisicos, pasando por la logistica del evento, hasta la
  produccion audiovisual de todo el material requerido para el evento
  virtual o presencial.`

  const parr3 = `Experto en montajes de show para artistas,
  musicales, convenciones, eventos empresariales. Especialista en
  video mapping, streaming, DJ y VDJ. Además de ser Comunicador social
  con experiencia en desarrollo de emprendimientos personales
  dedicados a la enseñanza de diversas habilidades, además de locución
  y producción en programas de radio de amplio reconocimiento.`

  const parr4 = `Capacidad para el liderazgo, excelente pedagogía e innovación para
  el desarrollo de nuevas ideas.
  `
  return (
    <div>
      <Box pad={{ horizontal: 'medium', vertical: 'small' }} gridArea="header">
        <AppHeader />
        <Cover />
      </Box>
      <div className="main-class">
        <Main background={customTheme.global.colors.charcoal} pad="medium">
          <Paragraph size={'20px'} fill>
            {parr}
          </Paragraph>
          <Paragraph size={'20px'} fill>
            {parr2}
          </Paragraph>
          <Paragraph size={'20px'} fill>
            {parr3}
          </Paragraph>
          <Paragraph size={'20px'} fill>
            {parr4}
          </Paragraph>
        </Main>
      </div>
    </div>
  )
}
