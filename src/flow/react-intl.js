/* @flow */

type MessageDescriptorType = {|
  id: string,
  defaultMessage?: string,
  description?: string | Object,
|};
type IntlConfigType = {|
  locale: string,
  formats: Object,
  messages: {[id: string]: string},
  defaultLocale: string,
  defaultFormats: Object,
|};
type IntlFormatType = {|
  formatDate: (value: any, options?: Object) => string,
  formatTime: (value: any, options?: Object) => string,
  formatRelative: (value: any, options?: Object) => string,
  formatNumber: (value: any, options?: Object) => string,
  formatPlural: (value: any, options?: Object) => string,
  formatMessage: (
    messageDescriptor: MessageDescriptorType,
    values?: Object,
  ) => string,
  formatHTMLMessage: (
    messageDescriptor: MessageDescriptorType,
    values?: Object,
  ) => string,
|};

declare type Intl = IntlConfigType & IntlFormatType & {|now: () => number|};
