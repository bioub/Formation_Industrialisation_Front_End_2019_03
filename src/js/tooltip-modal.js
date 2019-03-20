import $ from 'jquery';
import 'bootstrap';
import { format } from 'date-fns';

$('.btn-lg').tooltip({
  placement: 'right',
});

console.log(format(new Date(), 'HH:mm:ss'));
