import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  '#iface': {
    'backgroundColor': '#EBF2F2',
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'input#message': {
    'background': '#384445',
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'outline': 'none',
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }],
    'fontSize': [{ 'unit': 'em', 'value': 1.6 }],
    'fontWeight': '300',
    'marginBottom': [{ 'unit': 'em', 'value': 1 }],
    'padding': [{ 'unit': 'em', 'value': 1.2 }, { 'unit': 'em', 'value': 0.7 }, { 'unit': 'em', 'value': 1.2 }, { 'unit': 'em', 'value': 0.7 }],
    'color': '#94AAAC',
    'width': [{ 'unit': '%H', 'value': 0.8 }],
    'float': 'left'
  },
  'inputsubmit': {
    'background': '#00A8B6',
    'color': '#fff',
    'float': 'right',
    'width': [{ 'unit': '%H', 'value': 0.2 }],
    'border': [{ 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'em', 'value': 1.02 }, { 'unit': 'em', 'value': 0.7 }, { 'unit': 'em', 'value': 1.02 }, { 'unit': 'em', 'value': 0.7 }],
    'fontSize': [{ 'unit': 'em', 'value': 1.2 }],
    'cursor': 'pointer'
  },
  'details-container': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'background': '#fff',
    'padding': [{ 'unit': 'em', 'value': 1.4 }, { 'unit': 'em', 'value': 1.4 }, { 'unit': 'em', 'value': 1.4 }, { 'unit': 'em', 'value': 1.4 }],
    'marginBottom': [{ 'unit': 'px', 'value': 5 }],
    'display': 'block',
    'clear': 'both',
    'borderLeft': [{ 'unit': 'px', 'value': 6 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#00A8B6' }]
  },
  'details-container p': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'button': {
    'background': '#D4E0E1',
    'color': '#465057',
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }],
    'width': [{ 'unit': 'string', 'value': 'auto' }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'em', 'value': 0.8 }],
    'float': 'right',
    'marginLeft': [{ 'unit': 'px', 'value': 20 }]
  }
});
