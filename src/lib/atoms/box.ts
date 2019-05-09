import { SpaceProps, AlignItemsProps, HeightProps, WidthProps, FontSizeProps, ColorProps, FlexProps, OrderProps, AlignSelfProps, DisplayProps, BorderRadiusProps } from 'styled-system';

type BoxProps = BorderRadiusProps & AlignItemsProps & DisplayProps & HeightProps & SpaceProps & WidthProps & FontSizeProps & ColorProps & FlexProps & OrderProps & AlignSelfProps;

export default BoxProps;