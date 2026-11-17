const interviewPdfModules =
  import.meta.glob(
    './interviews/*.pdf',
    {
      eager: true,
      query: '?url',
      import: 'default',
    },
  ) as Record<
    string,
    string
  >


export function getInterviewPdfUrl(
  interviewId: string,
) {
  const expectedSuffix =
    `/${interviewId}.pdf`


  const entry =
    Object.entries(
      interviewPdfModules,
    ).find(
      ([
        path,
      ]) =>
        path.endsWith(
          expectedSuffix,
        ),
    )


  return entry?.[1] ?? null
}
