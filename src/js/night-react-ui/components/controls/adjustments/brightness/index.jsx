/*
 * Photo Editor SDK - photoeditorsdk.com
 * Copyright (c) 2013-2015 9elements GmbH
 *
 * Released under Attribution-NonCommercial 3.0 Unported
 * http://creativecommons.org/licenses/by-nc/3.0/
 *
 * For commercial use, please contact us at contact@9elements.com
 */

import BrightnessControlsComponent from './brightness-controls-component'

export default {
  canvasControls: null,
  controls: BrightnessControlsComponent,
  identifier: 'brightness',
  getInitialSharedState: (context) => {
    const operationExistedBefore = context.ui.operationExists('brightness')
    const operation = context.ui.getOrCreateOperation('brightness')
    const initialOptions = {
      brightness: operation.getBrightness()
    }
    return {
      operationExistedBefore,
      operation,
      initialOptions
    }
  },
  isSelectable: (ui) => {
    return ui.isOperationSelected('brightness')
  }
}
