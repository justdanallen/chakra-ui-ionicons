import {
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  useMediaQuery,
} from '@chakra-ui/react';
import * as React from 'react';
import { useEffect } from 'react';
import { SelectedIconType } from '../search/icon-data';
import { useSelectedIcon, useSelectedIconType } from '../state';
import { Code } from './code';

const keyLookUp: Record<SelectedIconType, string> = {
  filled: '',
  logo: '',
  outline: 'Outline',
  sharp: 'Sharp',
};

export function UsageModal() {
  const { selectedIcon, triggerRef, deselectIcon } = useSelectedIcon();
  const selectedType = useSelectedIconType(state => state.selectedIconType);

  const { isOpen, onClose, onOpen } = useDisclosure({
    onClose: deselectIcon,
  });

  useEffect(() => {
    if (selectedIcon) onOpen();
  }, [selectedIcon]);

  const [isGreaterThan850] = useMediaQuery('(min-width: 850px)');
  console.log(isGreaterThan850);

  const importName = `${selectedIcon?.logo ? 'Logo' : ''}${selectedIcon?.name}${
    keyLookUp[selectedType]
  }Icon`;

  return (
    <Drawer
      placement={isGreaterThan850 ? 'right' : 'bottom'}
      size={isGreaterThan850 ? 'lg' : undefined}
      onClose={onClose}
      isOpen={isOpen}
      finalFocusRef={triggerRef}
    >
      <DrawerOverlay>
        <DrawerContent>
          <DrawerHeader>{importName} Usage</DrawerHeader>
          <DrawerBody>
            <Code
              flexGrow={1}
            >{`import { ${importName} } from 'chakra-ui-ionicons';`}</Code>
            <Code>
              {`
// The default icon size is 1em (16px)
<${importName} />

// Use the "boxSize" prop to change the icon size
<${importName} w={6} h={6} />

// Use the "color" prop to change the icon color
<${importName} w={8} h={8} color="blue.500" />
              `}
            </Code>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
}
