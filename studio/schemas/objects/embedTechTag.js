import React from "react";

const TechTagpreview = ({ value }) => (
  // eslint-disable-next-line
  <span>{value.names}</span>
);

export default {
  name: 'embedTechTag',
  title: 'Embed Tech Tag',
  type: 'object',
  fields: [
    {
      name: 'names',
      title: 'Tech Names',
      type: 'text',
      description: 'Name of the technologies',
    }, {
      name: 'imageLinks',
      title: 'Image URLs',
      type: 'text',
      description: 'URLs for logo image of the technology'
    }
  ],
  preview: {
    select: {
      names: 'names',
      imageLinks: 'imageLinks'
    },
    component: TechTagpreview,
  },
};
