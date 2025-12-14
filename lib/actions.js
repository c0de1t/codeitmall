'use server';

import { post } from '@/lib/fetch';
import { revalidatePath } from 'next/cache';

export async function submitSizeReview(currentState, formData) {
  const data = Object.fromEntries(formData.entries());
  const sizeReview = {
    ...data,
    height: Number(data.height),
    productId: Number(data.productId),
  };

  try {
    await post('/size_reviews', sizeReview);
    revalidatePath(`/products/${sizeReview.productId}`);
    return { error: null };
  } catch (err) {
    return {
      error: '리뷰 작성 중 오류가 발생했습니다.',
    };
  }
}
