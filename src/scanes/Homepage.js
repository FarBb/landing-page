import React from 'react'
import Header from 'parts/Header'
import Section from 'elements/Section'
import ImageHero from 'assets/images/hero-image.png'
import Fade from 'react-reveal/Fade'

export default function Homepage() {
  return (
    <div classNameName="body-wrap">
      <Header></Header>
      <main classNameName="site-content">
        <Section isCenteredContent classNameName="hero ilustratrion-section-01">
        <div className="container-sm">
						<div className="hero-inner section-inner">
							<div className="hero-content">
                <Fade bottom delay="500">
								<h1 className="mt-6 mb-16">
									Landing template for startups
								</h1>
                </Fade>
								<div className="container-xs">
									<Fade bottom delay="1000">
                  <p
										className="mt-0 mb-32">
										Our landing page template works on all
										devices, so you only have to set it up
										once, and get beautiful results forever.
									</p>
                  </Fade>
								</div>
							</div>
							<div
								className="hero-figure"
								data-reveal-value="20px"
								data-reveal-delay="800"
							>
                <Fade bottom delay="1500">
								<img
									className="has-shadow"
									src={ImageHero}
									alt="Hero image"
									width="896"
									height="504"
								/>
                </Fade>
							</div>
						</div>
					</div>
        </Section>
      </main>
    </div>
  )
}
