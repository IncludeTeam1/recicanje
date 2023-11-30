import { create } from 'zustand';

export const userStore = create((set, get) => ({
  usuarioSesion: {},
  inicioSesion: ({ usuario }) => set((state) => ({ usuarioSesion: usuario })),
  cerrarSesion: () => set({ usuarioSesion: {} }),
  obtenerUsuario: () => get(usuarioSesion),
}));
