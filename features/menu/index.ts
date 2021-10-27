import { createSlice, PayloadAction} from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

  export type MenuState = {
    isOpen: boolean;
  };
  
  const initialState: MenuState = {
    isOpen: false
  };
  
  export const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
      openMenu: state => {
        state.isOpen = true;
      },
      closeMenu: state => {
        state.isOpen = false;
      },
      toggleMenu: (state) => {
        state.isOpen = !state.isOpen;
      },
    },
  });
  export const {
    openMenu, 
    closeMenu, 
    toggleMenu,
  } = menuSlice.actions; 

  export const isOpenMenu = (state: RootState) => state.menu.isOpen;
  export default menuSlice.reducer;