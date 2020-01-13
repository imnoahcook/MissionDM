import { Position, Toaster, Intent } from '@blueprintjs/core';

/** Singleton toaster instance. Create separate instances for different options. */
export const GoodToaster = Toaster.create({
  className: 'good-toaster',
  position: Position.TOP,
  intent: Intent.SUCCESS,
});

export const BadToaster = Toaster.create({
  className: 'bad-toaster',
  position: Position.TOP,
  intent: Intent.DANGER,
});
