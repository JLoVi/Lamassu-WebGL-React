import React, { useState, useEffect } from "react";
import {Helmet} from "react-helmet";
import LamassuImage from '../assets/lamassu_img.png'
function SEO() {
    const title = "Lamassu"
    const description = `Lamassu presents one territory as four, different-yet-simultaneous worlds. Lamassu can be
    experienced as a group of human city planners, as a fungal macro-organism, as the host of the
    souls of as-yet-unborn creatures, or as a rock. Worlds and ludic conditions vary, depending on
    the metaphysical and metaethical settings of each character.`
    const url = "https://www.ru4real.de/"
  return (
        <div >
            <Helmet
                htmlAttributes={{
                    lang:"en"
                }}
                defaultTitle={title}
                title={title}
                defer={false}
                meta={[
                    {
                        rel: "canonical",
                        href: url
                    },
                    {
                        name: "description",
                        content: description
                    },
                    {
                        property: 'og:title',
                        content: title
                    },
                    {
                        property: 'og:description',
                        content: description
                    },
                    {
                        property: 'og:type',
                        content: 'website'
                    },
                    {
                        property: 'og:url',
                        content: url
                    },
                    {
                        property: 'og:image',
                        content: LamassuImage
                    },
                    {
                        name: "description",
                        content: description
                    },
                    {
                        name: "twitter:card",
                        content: 'summary'
                    },

                ]}
            />
        </div>
  );
}

export default SEO
