import React = require('react');
import { defaultIconData, IconDisplayData } from './icon-data';
import { IconPreview } from './icon-preview';

type DefaultIconDisplayProps = {
  onSelect: (icon: IconDisplayData) => void;
};

export function DefaultIconDisplay({ onSelect }: DefaultIconDisplayProps) {
  return (
    <>
      {defaultIconData.map(icon => (
        <IconPreview {...icon} onSelect={onSelect} />
      ))}
    </>
  );
}
