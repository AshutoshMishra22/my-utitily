import './chipList.scss';

type Props = { chipList: Array<Record<string, string>> };
// TODO add icon
export default function ChipListComponent({ chipList }: Props) {
  return (
    <section className='chipListContainer'>
      <div className='chipListOverlay'>
        {chipList.map((chip) => (
          <span
            className='chipItem'
            key={chip.key}
          >
            {chip.name}
          </span>
        ))}
      </div>
    </section>
  );
}
