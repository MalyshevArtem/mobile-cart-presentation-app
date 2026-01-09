import { create } from "zustand";

export type CartItem = {
  id: number;
  count: number;
};

type CartStore = {
  cart: CartItem[];
  addToCart: (id: number) => void;
  removeFromCart: (id: number) => void;
  removeAll: () => void;
};

export const useCartStore = create<CartStore>((set) => ({
  cart: [],

  addToCart: (id) =>
    set((state) => {
      const existing = state.cart.find((item) => item.id === id);

      if (existing) {
        return {
          cart: state.cart.map((item) =>
            item.id === id
              ? { ...item, count: item.count + 1 }
              : item
          ),
        };
      }

      return { cart: [...state.cart, { id, count: 1 }] };
    }),

  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart
        .map((item) =>
          item.id === id
            ? { ...item, count: item.count - 1 }
            : item
        )
        .filter((item) => item.count > 0),
    })),

    removeAll: () =>
      set(() => ({
        cart: [],
      })),
}));
