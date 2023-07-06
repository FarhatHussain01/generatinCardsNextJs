import Hero from './components/shared/Hero';
import Card from './components/shared/Card';
import data from './components/utils/data';
import Wrapper from './components/shared/Wrapper';

const Page = () => {
  return (
    <div>
      <Wrapper>
      <Hero />

      <div className='flex flex-col flex-1  sm:flex-row items-center justify-center'>
      {data.map((item) => (
        <Card
          key={item.id}
          coverImg={item.coverImg}
          rating={item.stats.rating}
          reviewCount={item.stats.reviewCount}
          location={item.location}
          title={item.title}
          price={item.price}
          openSpots={item.openSpots}
        />
      ))}
      </div>
      </Wrapper>
    </div>
  );
};

export default Page;
