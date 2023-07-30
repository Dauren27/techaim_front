import React from 'react';
import { path } from '../../../../api/ApiRequest';


const styles = require('./index.scss');
const DownloadIcon = require('../../../../shared/icons/icon-download.svg');

interface Props {
  id: number;
  year: number;
  name: string;
  lang: string;

}

export default function ReportsTable(props: Props) {
  const report = props

  return (
    <div>
      <div className={[styles.table_wrapper].join(' ')}>
      </div>
      <div className={[styles.table].join(' ')}>
        <div className={[styles.table_row].join(' ')}>
          <div className={[styles.table_cell].join(' ')}>1</div>
          <div className={[styles.table_cell].join(' ')}>
            <a href={`${path}/public-api/RUS/reports`} className={[styles.report_link].join(' ')}>{report.name}</a>
          </div>
          <div className={[styles.table_cell].join(' ')}>{report.year}</div>
          <div className={[styles.table_cell].join(' ')}>
            <a href={`${path}/public-api/report/${report.id}/${report.lang}/pdf`}>
              <img src={DownloadIcon} alt='download' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
