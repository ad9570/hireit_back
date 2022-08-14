import React from 'react';
import { ResponsiveLine } from '@nivo/line'




const Chartreal = () => {
    let data=  [
        {
        "id": "japan",
        "color": "hsl(66, 70%, 50%)",
        "data": [
            {
            "x": "plane",
            "y": 23
            },
            {
            "x": "helicopter",
            "y": 7
            },
            {
            "x": "boat",
            "y": 148
            },
            {
            "x": "train",
            "y": 221
            },
            {
            "x": "subway",
            "y": 82
            },
            {
            "x": "bus",
            "y": 113
            },
            {
            "x": "car",
            "y": 206
            },
            {
            "x": "moto",
            "y": 6
            },
            {
            "x": "bicycle",
            "y": 71
            },
            {
            "x": "horse",
            "y": 142
            },
            {
            "x": "skateboard",
            "y": 17
            },
            {
            "x": "others",
            "y": 244
            }
        ]
        },
        {
        "id": "france",
        "color": "hsl(320, 70%, 50%)",
        "data": [
            {
            "x": "plane",
            "y": 61
            },
            {
            "x": "helicopter",
            "y": 82
            },
            {
            "x": "boat",
            "y": 90
            },
            {
            "x": "train",
            "y": 150
            },
            {
            "x": "subway",
            "y": 42
            },
            {
            "x": "bus",
            "y": 113
            },
            {
            "x": "car",
            "y": 98
            },
            {
            "x": "moto",
            "y": 11
            },
            {
            "x": "bicycle",
            "y": 269
            },
            {
            "x": "horse",
            "y": 119
            },
            {
            "x": "skateboard",
            "y": 234
            },
            {
            "x": "others",
            "y": 91
            }
        ]
        },
        {
        "id": "us",
        "color": "hsl(255, 70%, 50%)",
        "data": [
            {
            "x": "plane",
            "y": 143
            },
            {
            "x": "helicopter",
            "y": 219
            },
            {
            "x": "boat",
            "y": 263
            },
            {
            "x": "train",
            "y": 36
            },
            {
            "x": "subway",
            "y": 82
            },
            {
            "x": "bus",
            "y": 123
            },
            {
            "x": "car",
            "y": 221
            },
            {
            "x": "moto",
            "y": 149
            },
            {
            "x": "bicycle",
            "y": 207
            },
            {
            "x": "horse",
            "y": 31
            },
            {
            "x": "skateboard",
            "y": 262
            },
            {
            "x": "others",
            "y": 122
            }
        ]
        },
        {
        "id": "germany",
        "color": "hsl(254, 70%, 50%)",
        "data": [
            {
            "x": "plane",
            "y": 205
            },
            {
            "x": "helicopter",
            "y": 185
            },
            {
            "x": "boat",
            "y": 110
            },
            {
            "x": "train",
            "y": 208
            },
            {
            "x": "subway",
            "y": 37
            },
            {
            "x": "bus",
            "y": 108
            },
            {
            "x": "car",
            "y": 47
            },
            {
            "x": "moto",
            "y": 289
            },
            {
            "x": "bicycle",
            "y": 282
            },
            {
            "x": "horse",
            "y": 28
            },
            {
            "x": "skateboard",
            "y": 113
            },
            {
            "x": "others",
            "y": 288
            }
        ]
        },
        {
        "id": "norway",
        "color": "hsl(165, 70%, 50%)",
        "data": [
            {
            "x": "plane",
            "y": 192
            },
            {
            "x": "helicopter",
            "y": 3
            },
            {
            "x": "boat",
            "y": 75
            },
            {
            "x": "train",
            "y": 179
            },
            {
            "x": "subway",
            "y": 245
            },
            {
            "x": "bus",
            "y": 102
            },
            {
            "x": "car",
            "y": 179
            },
            {
            "x": "moto",
            "y": 255
            },
            {
            "x": "bicycle",
            "y": 117
            },
            {
            "x": "horse",
            "y": 17
            },
            {
            "x": "skateboard",
            "y": 93
            },
            {
            "x": "others",
            "y": 165
            }
        ]
        }
    ]
    return (
        <div className='container' style={{height:'500px'}}>
        
                <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'transportation',
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'count',
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        pointSize={5}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        areaBlendMode="lighten"
        areaOpacity={0.1}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 92,
                translateY: 4,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 79,
                itemHeight: 14,
                itemOpacity: 0.75,
                symbolSize: 9,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
        
        </div>
    );
};

export default Chartreal;