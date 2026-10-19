import { useState, type ChangeEvent, type FormEvent } from "react";

interface OrderFormProps {
  onSubmit: (order: { name: string; quantity: number }) => void;
}

const OrderForm = ({ onSubmit }: OrderFormProps) => {
  const [name, setName] = useState<string>("Masala Chai");
  const [quantity, setQuantity] = useState<number>(1);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit({ name: name.trim(), quantity });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="chai-name">Chai Name</label>
      <input
        id="chai-name"
        value={name}
        required
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setName(event.currentTarget.value)
        }
      />
      <label htmlFor="chai-quantity">Cups</label>
      <input
        id="chai-quantity"
        type="number"
        min="1"
        step="1"
        value={quantity}
        required
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setQuantity(Number(event.currentTarget.value))
        }
      />
      <button type="submit">Place Order</button>
    </form>
  );
};

export default OrderForm;
