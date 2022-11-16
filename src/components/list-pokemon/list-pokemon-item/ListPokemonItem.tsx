import React, { useEffect, useState } from 'react';
import api from '../../../services/api';

import { ItemWrapper } from './ListPokemonItem.style';

interface PokemonItemProps {
  name: string;
}

const ListPokemonItem: React.FC<PokemonItemProps> = ({ name }) => {
  const [itemImage, setItemImage] = useState('');
  const [itemId, setItemId] = useState(0);
  const [changeWidth, setChangeWiddth] = useState(false);
  useEffect(() => {
    async function PokemonItem() {
      const response = await api.get(`pokemon/${name}`);
      setItemImage(response.data.sprites.other.dream_world.front_default);
      setItemId(response.data.id);
      let dreamWordlImage =
        response.data.sprites.other.dream_world.front_default;
      setItemImage(
        dreamWordlImage ? dreamWordlImage : response.data.sprites.front_default
      );
      setChangeWiddth(dreamWordlImage ? false : true);
    }
    PokemonItem();
  });
  return (
    <ItemWrapper changeWidth={changeWidth}>
      <img
        src={`${itemImage ? itemImage : './img/unknowPokemon.png'} `}
        alt={name}
      />
      <p>{name}</p>
      <span>#{('000' + itemId).slice(-3)}</span>
    </ItemWrapper>
  );
};
export default ListPokemonItem;
