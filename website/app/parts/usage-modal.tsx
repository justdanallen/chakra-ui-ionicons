import {
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
} from '@chakra-ui/react';
import * as React from 'react';
import { useEffect } from 'react';
import { useSelectedIcon, useSelectedIconType } from '../state';

export function UsageModal() {
  const { selectedIcon, triggerRef, deselectIcon } = useSelectedIcon();
  const selectedType = useSelectedIconType(state => state.selectedIconType);

  const { isOpen, onClose, onOpen } = useDisclosure({
    onClose: deselectIcon,
  });

  useEffect(() => {
    if (selectedIcon) onOpen();
  }, [selectedIcon]);

  return (
    <Drawer
      placement="bottom"
      onClose={onClose}
      isOpen={isOpen}
      finalFocusRef={triggerRef}
    >
      <DrawerOverlay>
        <DrawerContent>
          <DrawerHeader>{selectedIcon?.name} Usage</DrawerHeader>
          <DrawerBody>Hello world {selectedType}</DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
}
