import create from 'zustand';
import { SelectedIconType, IconDisplayData } from './search/icon-data';

export const useSelectedIconType = create<{
  selectedIconType: SelectedIconType;
  setSelectedIconType: (selected: SelectedIconType) => void;
}>(set => ({
  selectedIconType: 'filled',
  setSelectedIconType: selected =>
    set(state => ({
      ...state,
      selectedIconType: selected,
    })),
}));

export const useSearchKey = create<{
  searchKey: string;
  setSearchKey: (input: string) => void;
}>(set => ({
  searchKey: '',
  setSearchKey: input =>
    set(state => ({
      ...state,
      searchKey: input,
    })),
}));

export const useSelectedIcon = create<{
  selectedIcon: IconDisplayData | null;
  setSelectedIcon: (icon: IconDisplayData) => void;
}>(set => ({
  selectedIcon: null,
  setSelectedIcon: icon =>
    set(state => ({
      ...state,
      selectedIcon: icon,
    })),
}));
