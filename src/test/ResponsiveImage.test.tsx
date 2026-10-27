import { describe, expect, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { ResponsiveImage } from '../components/common/ResponsiveImage';

const imageSource = '/images/grid13.jpg';
const imageDescription = 'Career opportunity';

describe('ResponsiveImage', () => {
  it('reserves the parent geometry and lazily loads images by default', () => {
    render(<ResponsiveImage src={imageSource} alt={imageDescription} />);

    const image = screen.getByRole('img', { name: imageDescription });
    expect(image).toHaveAttribute('src', imageSource);
    expect(image).toHaveAttribute('loading', 'lazy');
    expect(image).toHaveAttribute('decoding', 'async');
    expect(image).toHaveAttribute('draggable', 'false');
    expect(image).toHaveStyle({ width: '100%', height: '100%', objectFit: 'cover', opacity: '0' });
    expect(image.parentElement).toHaveStyle({ position: 'absolute', overflow: 'hidden' });
    expect(image.parentElement).toHaveAttribute('aria-busy', 'true');
  });

  it('supports eager images and removes the loading treatment after a successful load', () => {
    render(<ResponsiveImage src={imageSource} alt={imageDescription} eager />);
    const image = screen.getByRole('img', { name: imageDescription });

    expect(image).toHaveAttribute('loading', 'eager');
    fireEvent.load(image);
    expect(image).toHaveStyle({ opacity: '1' });
    expect(image.parentElement).toHaveAttribute('aria-busy', 'false');
  });

  it('keeps decorative images out of the accessibility tree, including their error state', () => {
    render(<ResponsiveImage src={imageSource} />);
    const image = screen.getByAltText('');

    expect(screen.queryByRole('img')).not.toBeInTheDocument();
    fireEvent.error(image);
    expect(image).not.toBeVisible();
    expect(screen.getByText('Image unavailable')).toHaveAttribute('aria-hidden', 'true');
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
  });

  it('shows an accessible fallback without a broken image or changing wrapper geometry', () => {
    render(<ResponsiveImage src={imageSource} alt={imageDescription} />);
    const image = screen.getByRole('img', { name: imageDescription });
    const wrapper = image.parentElement;

    fireEvent.error(image);
    expect(image).not.toBeVisible();
    expect(screen.getByRole('img', { name: imageDescription })).toHaveTextContent('Image unavailable');
    expect(wrapper).toHaveAttribute('aria-busy', 'false');
    expect(wrapper).toHaveStyle({ position: 'absolute', overflow: 'hidden' });
  });

  it('starts loading again when the source changes after a load or an error', () => {
    const { rerender } = render(<ResponsiveImage src={imageSource} alt={imageDescription} />);
    const firstImage = screen.getByRole('img', { name: imageDescription });
    const wrapper = firstImage.parentElement;
    fireEvent.load(firstImage);

    rerender(<ResponsiveImage src="/images/grid2.jpg" alt={imageDescription} />);
    const secondImage = screen.getByRole('img', { name: imageDescription });
    expect(secondImage.parentElement).toBe(wrapper);
    expect(secondImage).toHaveStyle({ opacity: '0' });
    expect(wrapper).toHaveAttribute('aria-busy', 'true');
    fireEvent.error(secondImage);

    rerender(<ResponsiveImage src="/images/grid4.jpg" alt={imageDescription} />);
    const thirdImage = screen.getByRole('img', { name: imageDescription });
    expect(screen.queryByText('Image unavailable')).not.toBeInTheDocument();
    expect(wrapper).toHaveAttribute('aria-busy', 'true');
    fireEvent.load(thirdImage);
    expect(thirdImage).toHaveStyle({ opacity: '1' });
    expect(wrapper).toHaveAttribute('aria-busy', 'false');
  });

  it('preserves caller classes and image-position styling overrides', () => {
    render(
      <ResponsiveImage
        src={imageSource}
        alt={imageDescription}
        className="opportunity-image"
        sx={{ '& img': { objectPosition: 'center top' } }}
      />
    );

    const image = screen.getByRole('img', { name: imageDescription });
    expect(image.parentElement).toHaveClass('opportunity-image');
    expect(image).toHaveStyle({ objectPosition: 'center top' });
  });
});
