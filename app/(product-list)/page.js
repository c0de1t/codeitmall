import { Suspense } from 'react';
import FeaturedBanner from './components/FeaturedBanner';
import ProductListSkeleton from './components/ProductListSkeleton';
import ProductResults from './components/ProductResults';
import BannerSkeleton from './components/BannerSkeleton';

export const metadata = {
  title: '홈',
};

export default async function Home() {
  return (
    <div>
      <Suspense fallback={<BannerSkeleton />}>
        <FeaturedBanner />
      </Suspense>
      <Suspense fallback={<ProductListSkeleton />}>
        <ProductResults />
      </Suspense>
    </div>
  );
}
