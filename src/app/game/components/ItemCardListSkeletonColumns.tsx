import ItemCardListContainer from "./ItemCardListContainer";
import ItemCardSkeleton from "./ItemCardSkeleton";

const SkeletonList = ({ id }: { id: string }) =>
  new Array(8)
    .fill(null)
    .map((_, i) => <ItemCardSkeleton key={`${id}-${i}`} />);

const ItemCardListSkeletonColumns = () => {
  return (
    <>
      <ItemCardListContainer
        title="Countries"
        data-testid="left-column-skeleton"
      >
        <SkeletonList id="left-column-skeleton" />
      </ItemCardListContainer>
      <ItemCardListContainer
        title="Capitals"
        data-testid="right-column-skeleton"
      >
        <SkeletonList id="right-column-skeleton" />
      </ItemCardListContainer>
    </>
  );
};

export default ItemCardListSkeletonColumns;
