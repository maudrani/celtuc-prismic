import { ALIGN_NAMES, COLOR_TYPES } from '@/constants/styles';
import {
  GetSizeValue,
  toPX,
} from 'utils/adapters';
import { GetResponsiveValues } from '../../CSS_ENGINE/utils/responsive';

const defaultData = {
  size: '1em',

  width: 'fit-content',
  min_width: null,
  max_width: null,
  height: '100%',
  min_height: null,
  max_height: null,

  p_t: 0,
  p_r: 0,
  p_b: 0,
  p_l: 0,

  m_t: 0,
  m_r: 0,
  m_b: 0,
  m_l: 0,

  font_type: COLOR_TYPES.solid,
  font_opacity: 1,
  font_gradient_direction: ALIGN_NAMES.left,
  background_type: COLOR_TYPES.solid,
  background_opacity: 1,
  background_direction: ALIGN_NAMES.top,

  direction: 'column',
  align_y: ALIGN_NAMES.top,
  align_x: ALIGN_NAMES.left,
  self_align: 'inherit',
  gap: 0,

  border_radius: 0,
};



export const parseDataProp = (data = {}) => ({
  size: GetResponsiveValues(data.size || defaultData.size, 'size'),

  width: GetResponsiveValues(data.width || defaultData.width, '%'),
  min_width: GetResponsiveValues(data.min_width || defaultData.min_width, 'px'),
  max_width: GetResponsiveValues(data.max_width || defaultData.max_width, 'px'),
  height: GetResponsiveValues(data.height || defaultData.height, '%'),
  min_height: GetResponsiveValues(
    data.min_height || defaultData.min_height,
    'px'
  ),
  max_height: GetResponsiveValues(
    data.max_height || defaultData.max_height,
    'px'
  ),

  p_t: GetResponsiveValues(data.p_t || defaultData.p_t, 'em'),
  p_r: GetResponsiveValues(data.p_r || defaultData.p_r, 'em'),
  p_b: GetResponsiveValues(data.p_b || defaultData.p_b, 'em'),
  p_l: GetResponsiveValues(data.p_l || defaultData.p_l, 'em'),
  m_t: GetResponsiveValues(data.m_t || defaultData.m_t, 'em'),
  m_r: GetResponsiveValues(data.m_r || defaultData.m_r, 'em'),
  m_b: GetResponsiveValues(data.m_b || defaultData.m_b, 'em'),
  m_l: GetResponsiveValues(data.m_l || defaultData.m_l, 'em'),

  font_type: data.font_type || defaultData.font_type,
  font_color: data.font_color,
  font_opacity: data.font_opacity || defaultData.font_opacity,
  font_gradient_direction:
    data.font_gradient_direction || defaultData.font_gradient_direction,
  background_type: data.background_type || defaultData.background_type,
  background_color: data.background_color,
  background_opacity: data.background_opacity || defaultData.background_opacity,
  background_direction:
    data.background_direction || defaultData.background_direction,

  direction: GetResponsiveValues(
    data.direction || defaultData.direction,
    'none'
  ),
  align_y: data.align_y || defaultData.align_y,
  align_x: data.align_x || defaultData.align_x,
  sefl_align: data.self_align || defaultData.self_align,
  gap: GetResponsiveValues(data.gap || defaultData.gap, 'em'),

  border_radius: data.border_radius
    ? toPX(GetSizeValue(data.border_radius).font_size)
    : defaultData.border_radius,
});
