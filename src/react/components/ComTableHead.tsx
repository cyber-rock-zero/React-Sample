import * as React from 'react';
import { Tooltip
    , TableHead
    , TableRow
    , TableCell
    , TableSortLabel
} from '@material-ui/core';

/**
 * テーブルヘッダのインターフェースです。
 */
interface ComTableHeadProps {
    order: "asc" | "desc" | undefined,
    orderBy: string,
    onRequestSort: any,
    cols: Array<any>
};

/**
 * テーブルヘッダです。
 */
export default class ComTableHead extends React.Component<ComTableHeadProps, {}> {
    /**
     * ヘッダを生成するイベントのハンドラプロパティです。
     */
    private createSortHandler = (property: any) => (event: any) => {
        this.props.onRequestSort(event, property);
    };
    
    /**
     * コンポーネントをレンダリングします。
     */
    public render(): JSX.Element {
        const { order, orderBy, cols } = this.props;
        return (
          <TableHead>
            <TableRow>
              {cols.map(col => {
                return (
                  <TableCell
                    key={col.id}
                    padding={col.disablePadding ? 'none' : 'default'}
                    sortDirection={orderBy === col.id ? order : false}
                  >
                    <Tooltip
                      title="Sort"
                      placement={col.numeric ? 'bottom-end' : 'bottom-start'}
                      enterDelay={300}
                    >
                      <TableSortLabel
                        active={orderBy === col.id}
                        direction={order}
                        onClick={this.createSortHandler(col.id)}
                      >
                        {col.label}
                      </TableSortLabel>
                    </Tooltip>
                  </TableCell>
                );
              }, this)}
            </TableRow>
          </TableHead>
        );
    }
}